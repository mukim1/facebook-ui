import Layout from "./components/Layouts/Layout";
import AddPost from "./UI/Homepage/AddPost";
import Posts from "./UI/Homepage/Posts";

function App() {
  return (
    <Layout>
      <AddPost />
      <Posts />
    </Layout>
  );
}

export default App;
