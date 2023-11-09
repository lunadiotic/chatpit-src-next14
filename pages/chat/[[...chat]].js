import ChatSidebar from "@/components/ChatSidebar/ChatSidebar";
import Head from "next/head";
import { useRef } from "react";

export default function Chat() {
  const messageInputRef = useRef(null);

  function handleMessageInputPressEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleSubmit(e) {
    if (messageInputRef.current.value === "") {
      return;
    }
    console.log(messageInputRef.current.value);
    messageInputRef.current.value = "";
  }

  return (
    <>
      <Head>
        <title>Start Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSidebar />
        <div className="flex flex-col bg-zinc-600">
          <div className="flex-1">chat window</div>
          <footer className="p-4 bg-zinc-900">
            <form className="" onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  ref={messageInputRef}
                  onKeyDown={handleMessageInputPressEnter}
                  className="w-full resize-none rounded-md bg-zinc-600 p-2 text-white focus:border-gray-500 focus:bg-zinc-500 focus:outline focus:outline-zinc-400"
                  placeholder="Send a message"
                ></textarea>
                <button className="btn" type="submit">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
