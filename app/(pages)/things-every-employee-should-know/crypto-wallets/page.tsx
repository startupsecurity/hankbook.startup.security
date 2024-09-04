"use client";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function CryptoWallets() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
        >
            <Typography variant="h1" className="mb-8 text-4xl border-b border-red-500 pb-2">
                Crypto Wallets
            </Typography>
            <Typography variant="body" className="mb-4">
                There are lots of options when it comes to what type of wallet you can use. For the sake of simplicity, I’m going to suggest you get started with Bitcoin core (https://bitcoin.org/en/download). This is an application that you install and will set up a wallet for you. Two things to note: 1. This will take up A LOT of space (around 40gigs at the time that I write this) since it syncs the whole blockchain to your hard drive and 2. Your wallet will be a file on your hard drive so if your hard drive dies your Bitcoin is all lost.<br/>
                There are plenty of ways around the fact that your wallet is bound to your hard drive, like installing Bitcoin core into dropbox/Google drive or having scheduled backups but for the purposes of this wallet page we’ll get back to how a Bitcoin wallet works.<br/>
                Once you have your wallet set up you’ll notice that there are send and receive dialogues (this is universal on all types of wallets), the receive options should show you an alphanumeric string which is what you give out to people when you want them to send you Bitcoin. Handing out your receive address is completely OK. People publicly post their receive address regularly, as I have done at the footer of every page on this site.<br/>
                The send dialogue will ask you where to send and what amount. Whoever you are sending Bitcoin to will have to give you their receiving address for you to enter here.<br/>
            </Typography>
            <Link href="/things-every-employee-should-know" className="text-red-300 hover:text-red-100">
                &lt; Back to Things Every Employee Should Know
            </Link>
        </motion.div>
    );
}