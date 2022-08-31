import Head from "next/head";
import Link from "next/link";

export default function FistPost() {
  return (
    <div>
      <Head>
        <title>最初の投稿</title>
      </Head>
      First Post
      <Link href="/">Home</Link>
    </div>
  );
}
