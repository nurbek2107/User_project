import AvatarWithUserDropdown from "./Avatar"

function Profile({ setKirish, kirish }) {
    return (
        <div>
            <div className="tooltip" data-tip="nasrddinovv najmiddin">
                <AvatarWithUserDropdown setKirish={setKirish} kirish={kirish} />
            </div>
        </div>
    )
}

export default Profile