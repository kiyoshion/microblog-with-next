import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilSytles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData)

  return {
    props: {
      postData,
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={utilSytles.headingMd}>{postData.title}</h1>
        <div className={utilSytles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
);
}
