import { render, screen } from "@testing-library/react";

import Sidebar from "@/components/Sidebar";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("@/components/DownloadResumeButton", () => ({
  DownloadResumeButton: () => <div data-testid="download-resume" />,
}));

jest.mock("@/components/ThemeToggle", () => ({
  ThemeToggle: () => <button type="button">Theme</button>,
}));

describe("Sidebar", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: true })) as jest.Mock;
  });

  it("shows primary navigation links", () => {
    render(<Sidebar />);

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  });
});

