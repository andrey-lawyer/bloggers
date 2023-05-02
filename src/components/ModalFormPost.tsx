import Modal from "react-modal";

import { useModal } from "@/hooks/useModal";

export default function ModalFormPost() {
  const { open, setOpen, handleSubmit } = useModal();

  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-3 absolute top-12 left-[50%] translate-x-[-50%] bg-white border-2 border-sky-500 rounded-md shadow-2xl"
          isOpen={open}
          appElement={document.getElementById("__next") as HTMLElement}
          onRequestClose={() => {
            setOpen(false);
          }}
        >
          <h2 className="text-center font-bold text-[18px]">New Post</h2>
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <label className="rounded mb-3 mt-3 text-center drop-shadow-lg bg-sky-900 text-white ">
              Title
              <input
                className="text-black text-sm rounded-b p-1 mt-1 w-[100%] focus: outline-sky-900 placeholder:italic"
                type="text"
                name="title"
                required
                placeholder="Title of post..."
                maxLength={20}
                minLength={3}
              />
            </label>
            <div className="  drop-shadow-lg mb-3 ">
              <p className="text-center bg-sky-900 rounded-t text-white pb-1  ">
                Choose a theme:
              </p>
              <div className="flex justify-between py-1 bg-white rounded-b px-2">
                <label className="flex flex-col sm:block ">
                  <input
                    className="  mr-[3px] mt-[2px]"
                    type="radio"
                    name="theme"
                    value="news"
                    defaultChecked
                  />
                  News
                </label>
                <label className="flex flex-col sm:block ">
                  <input
                    className=" mr-[3px] mt-[2px] "
                    type="radio"
                    name="theme"
                    value="hobbies"
                  />
                  Hobbies
                </label>
                <label className="flex flex-col sm:block ">
                  <input
                    className=" mr-[3px] mt-[2px]"
                    type="radio"
                    name="theme"
                    value="sport"
                  />
                  Sport
                </label>
                <label className="flex flex-col sm:block ">
                  <input
                    className=" mr-[3px] mt-[2px]"
                    type="radio"
                    name="theme"
                    value="people"
                  />
                  People
                </label>
                <label className="flex flex-col sm:block ">
                  <input
                    className=" mr-[2px] mt-[2px]"
                    type="radio"
                    name="theme"
                    value="other"
                  />
                  Other
                </label>
              </div>
            </div>
            <label className=" rounded mb-3 mt-3 text-center drop-shadow-lg bg-sky-900 text-white  ">
              Info
              <textarea
                className="text-black text-sm rounded-b p-1 mt-1  w-[100%] focus: outline-sky-900 placeholder:italic"
                name="info"
                rows={3}
                placeholder="Info for post..."
                maxLength={200}
                minLength={2}
                required
              ></textarea>
            </label>
            <div className=" drop-shadow-lg mb-3 ">
              <p className="text-center bg-sky-900 text-white rounded-t pb-1 ">
                Visible to everyone?
              </p>
              <div className="flex justify-between bg-white rounded-b px-2  ">
                <label className="flex">
                  <input
                    className=" mr-[2px] mt-[2px] "
                    type="radio"
                    name="visible"
                    value="true"
                  />
                  Yes
                </label>
                <label className="flex ">
                  <input
                    className=" mr-[2px] mt-[2px]"
                    type="radio"
                    name="visible"
                    value=""
                    defaultChecked
                  />
                  No
                </label>
              </div>
            </div>
            <button
              className="m-auto w-[100px] items-center justify-center bg-sky-400 rounded-[15px] p-[4px] hover:bg-sky-500 transition-transform duration-200 ease-out "
              type="submit"
            >
              Submit
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}
