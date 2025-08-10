# **Planora**

**Planora** is a full-stack event management and booking web application built with **Next.js (App Router)** and **TypeScript**.  
It incorporates essential real-world features such as user authentication, protected routes, dynamic pages, booking forms, and a comprehensive data management dashboard.

This project serves as a comprehensive example showcasing proficiency in modern **Next.js** and **TypeScript** best practices.

---

## **Features**

### Authentication
- User login and signup with **NextAuth.js** using Google and Email providers.
- UI adapts dynamically based on authentication status.
- Protected routes for dashboard and user-specific pages.

### Landing & Public Pages
- Responsive, visually appealing landing page with multiple sections (Hero, Features, Testimonials, FAQ, CTA).
- Additional public routes: Events listing, Blog, About, Contact.

### Dashboard (Protected CRUD)
- Authenticated users can create, edit, delete, and view event posts.
- Dynamic routing for detailed event pages.

### Booking Flow
- Event booking form that stores booking data in the user's dashboard.
- Simulated booking process (no payment integration).

### Styling & UI
- Styled with **Tailwind CSS** and **Lucide Icons** for accessible, consistent UI.
- Optimized images using `next/image`.
- Custom fonts loaded and optimized with `next/font`.

### Data Fetching
- Server-side data fetching using `fetch`.
- Client-side state management and live data updates with **React Query**.

---

## **Tech Stack**

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Lucide Icons](https://lucide.dev/)
- Vercel (Deployment)

---

## **Getting Started**

### Prerequisites

- Node.js v20 
- Package manager: npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ismail-dev-code/planora
cd planora

