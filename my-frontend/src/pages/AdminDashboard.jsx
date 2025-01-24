import { Link, Outlet } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <nav>
                <ul>
                    <li><Link to="./components/menu-management">Manage Menus</Link></li>
                    <li><Link to="/admin/book-management">Manage Books</Link></li>
                    <li><Link to="/admin/video-management">Manage Videos</Link></li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminDashboard;
