import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "@/components/ContactForm";

jest.mock("@/lib/email", () => ({
  sendEmail: jest.fn().mockResolvedValue({}),
}));

const { sendEmail } = jest.requireMock("@/lib/email");

describe("ContactForm", () => {
  it("validates inputs before enabling submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /send message/i });
    expect(submitButton).toBeDisabled();

    await user.type(screen.getByLabelText(/your name/i), "Ro");
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello world!!!");

    expect(submitButton).toBeEnabled();
  });

  it("submits via EmailJS when valid", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/your name/i), "Rohit");
    await user.type(screen.getByLabelText(/email address/i), "rohit@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello world!!!");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(sendEmail).toHaveBeenCalledWith(
        expect.objectContaining({
          name: "Rohit",
          email: "rohit@example.com",
          message: "Hello world!!!",
        })
      );
    });

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });
});

