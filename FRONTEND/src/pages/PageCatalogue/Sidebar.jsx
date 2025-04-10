import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeLink }) => {
    return (
        <div className="sidebar-left">
            <ul>
                {/* Lien vers la page des départements */}
                <li>
                    <Link
                        to="/departments"
                        className={activeLink === 'Departments' ? 'active' : ''}
                    >
                        Départements
                    </Link>
                </li>

                {/* Lien vers la page des catégories */}
                <li>
                    <Link
                        to="/categories"
                        className={activeLink === 'Categories' ? 'active' : ''}
                    >
                        Catégories
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;