import { getAllCategories } from "lib/api";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";

export default function Category({ name }) {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: [`/blog/category/technology`],
    fallback: false
  }
}

export async function getStaticProps(context) {
  const catSlug = context.params.Slug
  
  const allCats = await getAllCategories()
  const cat = allCats.find(({slug}) => slug === catSlug)

  return {
    props: {
      name: cat.name,
    },
  }
}