"use client"
import { Open_Sans } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

// css
import "./profile.css"
import UserLinks from "@/components/UserLinks"
import FormInput from "@/components/FormInput"

const openSans = Open_Sans({ subsets: ["latin"] })

function Profile() {

  // variables
  let userLinks = [
    {
      id: Math.random(),
      linkName: "Linkedin",
      linkUrl: "/profile",
    },
    {
      id: Math.random(),
      linkName: "Instagram",
      linkUrl: "/profile",
    },
    {
      id: Math.random(),
      linkName: "Facebook",
      linkUrl: "/profile",
    },
    {
      id: Math.random(),
      linkName: "Twitter",
      linkUrl: "/profile",
    },
  ]

  // functions
  let handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <section className='main-container grid grid-cols-2 grid-rows-11 gap-[30px]' style={{ marginTop: `30px`, marginBottom: `100px` }}>
        <div className="row-span-11 rounded-3xl flex flex-col items-center p-[50px] shadow-box">
          <Image
            width={200}
            height={200}
            src="http://api.dicebear.com/9.x/initials/svg?seed=najmiddin"
            alt="user img"
            className="w-11/12 select-none rounded-md"
            layout="intrinsic"
          />

          <div className="w-11/12 mt-[25px]">
            <div className="flex justify-between items-center px-2">
              <h1 className="text-3xl font-bold">My Profile</h1>

              <p className={`${openSans.className} font-semibold text-gray-400 text-lg`}>
                Jan 15, 2008
              </p>
            </div>

            <div className="w-full mt-9 flex flex-col gap-4">
              <div className="flex justify-between items-center border-b-2 pb-2">
                <p className={`text-lg capitalize w-1/2 overflow-hidden text-ellipsis whitespace-nowrap`}>nasrddinovv najmiddin</p>

                <p className="flex items-center gap-2 w-1/2 text-right ml-auto overflow-hidden text-ellipsis whitespace-nowrap">
                  <span className="inline-block ml-auto">tel:</span>
                  <Link href={`tel:+998 99 999 99 99`} className="text-sm link link-primary link-hover">+998 99 999 99 99 </Link>
                </p>
              </div>

              <div className="w-full flex items-center justify-between gap-3 border-b-2 pb-2">
                <p> Email:</p>
                <Link
                  href={`mailto:nasrddinovvnajmiddin@gmail`}
                  className="text-right link w-4/6 link-primary link-hover overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  nasrddinovvnajmiddin@gmail.com
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-lg gradient-text font-medium">
                You can edit your profile here.
              </p>
            </div>

            {/* <div className="w-full flex mt-8 justify-center">
              <button className="Btn">
                Edit
                <svg className="svg" viewBox="0 0 512 512">
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
              </button>
            </div> */}

            <div className="drawer drawer-end z-10">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content w-full flex justify-center mt-8">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="Btn">
                  {/* <button className="Btn"> */}
                  Edit
                  <svg className="svg" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                  {/* </button> */}
                </label>

              </div>
              <div className="drawer-side drawer-end">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                {/* <ul className="menu bg-base-200 text-base-content min-h-full w-[500px] p-4">
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                </ul> */}
                <div className="w-[500px] bg-base-200 min-h-full">
                  <h1 className="text-3xl font-bold text-center mt-10 mb-5">My Profile</h1>

                  <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 px-10">
                    <FormInput label="Display Name" type="text" />
                    <FormInput label="Email" type="email" />
                    <FormInput label="Phone Number **" type="number" />

                    <div className="mt-6 flex items-center gap-9">
                      <button className="button-submit">
                        <span>Submit</span>
                      </button>

                      <button className="button-submit button-reset">
                        <span>Reset</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="relative shadow-box rounded-3xl row-span-6">
          <div className="w-full flex justify-between items-center border-b-2 py-5 px-8">
            <p className="w-7/12 text-lg leading-tight font-semibold gradient-text2">
              You can set your social media accounts or projects here.
            </p>

            <button className="noselect add-item">
              <span className="text">Add</span>
              <span className="icon">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                </svg>
                <span className="buttonSpan">+</span>
              </span>
            </button>
          </div>

          <div className="px-10 py-8 flex flex-col gap-6 mb-2">
            {
              userLinks.length == 0 ?
                <p>You don t have any social media accounts or projects.</p>
                :
                userLinks.map((userLink) => {
                  return (
                    <UserLinks key={userLink.id} linkName={userLink.linkName} linkUrl={userLink.linkUrl} />
                  )
                })
            }
          </div>

          <div className="w-full flex justify-center pb-8 pt-3 absolute bottom-0">
            <button className="Btn-black">
              Edit
              <svg viewBox="0 0 512 512" className="svg">
                <path
                  d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                ></path>
              </svg>
            </button>
          </div>

        </div>

        <div className="shadow-box rounded-3xl row-span-5">
          <div className="w-full flex justify-between items-center border-b-2 py-7 px-8">
            <h1 className="text-3xl font-bold gradient-text2">My Description</h1>
            <button className="edit-desc">
              <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
              Edit
            </button>
          </div>

          <div className="p-7">
            <p className="text-center text-lg text-gray-500 h-[196px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptas magni cum provident perspiciatis deleniti delectus impedit in id libero error, numquam cumque dolorum voluptatibus qui praesentium, perferendis voluptates. Repellendus odit eos cumque pariatur id inventore amet nobis, dolores ipsum, perspiciatis quas. At minus cumque fuga corporis modi cum quos!
            </p>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Profile
