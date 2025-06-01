import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-semibold">Users Page</h1>
      </main>
    </div>
  );
};

export default Users;
