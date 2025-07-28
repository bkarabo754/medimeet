export const metadata = {
  title: 'Find Doctors - MediMeet',
  description: 'Browse and book appointments with top healthcare providers',
};

export default async function MainLayout({ children }) {
  return (
    <div className="container mx-auto my-20">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
}
