import Link from 'next/link';
const Header: React.FC = () => {
return (
    <header className="bg-blue-600 text-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-venter px-4">
            <h3 className="font-bold text-2x1">
 <link href="/"> Daily contents</link>
            </h3>
            <nav>
                <ul className="flex space-x-6">
                    <li className="hover:underline">
 <link href="/posts">Post</link>
                    </li>
                    <li className="hover:underline">
<link href="/users">Users</link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

}
export default Header;
