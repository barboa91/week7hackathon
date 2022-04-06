import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/getPosts')

    console.log(res.data.posts)
    return res.data.posts
  } catch (error) {
    throw error
  }
}
