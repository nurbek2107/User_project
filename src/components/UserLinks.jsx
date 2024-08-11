// next
import Link from 'next/link'

// css
import './components.css'

function UserLinks({ linkName, linkUrl }) {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className='w-8 select-none' src="../assets/link-icon.png" alt="link" />
                <p>
                    <Link href={`${linkUrl}`} target="_blank" className='text-lg link link-primary link-hover'>
                        {linkName}
                    </Link>
                </p>
            </div>

            <button className="delete-button">
                Delete
            </button>
        </div>
    )
}

export default UserLinks