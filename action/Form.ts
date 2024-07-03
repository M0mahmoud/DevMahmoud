"use server";
export async function actionForm(state: FormState, formData: any): Promise<FormState> {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwtkrFbgr8si4OZSsWGjIASU-MiD3MEnCKWRKuYSBEYqQ4pHTbV-TezdC4T8m0k9UaN/exec?formEmail=mahmoudweb05@gmail.com", {
      method: "POST",
      body: new URLSearchParams(formData),
    });
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
