import ChatSidebar from "@/components/ChatSidebar/ChatSidebar";
import Head from "next/head";

export default function Chat() {
    return (
        <>
            <Head>
                <title>Start Chat</title>
            </Head>
            <div className="grid h-screen grid-cols-[260px_1fr]">
                <ChatSidebar />
                <div className="flex flex-col bg-slate-800">
                    <div className="flex-1">chat window</div>
                    <footer className="p-4 bg-slate-900">Footer</footer>
                </div>
            </div>
        </>
    );
}