"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const requiredFields = ["name", "email", "usage", "message"] as const;

type RequiredField = (typeof requiredFields)[number];

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values = Object.fromEntries(formData.entries());
  const errors: Record<string, string> = {};

  requiredFields.forEach((field) => {
    const value = values[field];
    if (!value || (typeof value === "string" && value.trim().length === 0)) {
      errors[field] = "必須項目です";
    }
  });

  const email = values.email;
  if (typeof email === "string" && email.length > 0 && !email.includes("@")) {
    errors.email = "正しいメールアドレスを入力してください";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "入力内容をご確認ください。",
      errors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    status: "success",
    message: "送信が完了しました。担当よりご連絡いたします。",
  };
}
