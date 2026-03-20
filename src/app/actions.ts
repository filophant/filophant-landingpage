"use server";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error("LOOPS_API_KEY is not set");
    return { success: false, message: "Server configuration error." };
  }

  try {
    const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "filophant-landing-page",
        subscribed: true,
      }),
    });

    if (res.ok) {
      return { success: true, message: "You're on the list! We'll notify you when Filophant is ready." };
    }

    if (res.status === 409) {
      return { success: true, message: "You're already on the list! We'll be in touch." };
    }

    return { success: false, message: "Something went wrong. Please try again." };
  } catch {
    return { success: false, message: "Network error. Please try again." };
  }
}
