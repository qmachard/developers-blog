import React from "react";
import Layout from "../components/global/Layout";
import Card from "../components/molecules/Card";

class IndexPage extends React.Component {
  initialState = {};

  constructor(props) {
    super(props);

    this.state = { ...this.initialState };
  }

  render() {
    const image = {
      src: "https://images.unsplash.com/photo-1553748024-d1b27fb3f960?w=1450",
      alt: "This is an image",
    };

    return (
      <Layout title="Developers Blog">
        <Card title="Lorem ipsum" image={image} />
      </Layout>
    );
  }
}

IndexPage.propTypes = {};

IndexPage.defaultProps = {};

export default IndexPage;
