"use server";
export async function actionForm(
  _state: FormState,
  formData: any
): Promise<FormState> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxd7-1b8M1hGCJ3uduWXIav7pEm-9KYbCP3lRM5XRI6B_hZC91pD5jGo0fBu3YK9WYx/exec",
      {
        method: "POST",
        body: new URLSearchParams(formData),
      }
    );
    const data = await response.text();
    return { message: data };
  } catch (error) {
    console.log("error:", error);
    return undefined;
  }
}

type FormState =
  | {
      message?: string;
    }
  | undefined;
