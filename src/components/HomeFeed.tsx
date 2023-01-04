import HomeFeedPosts from "./HomeFeedPosts";
import TrendingPosts from "./TrendingPosts";

function HomeFeed() {
  return (
    <div>
      <section>
        <TrendingPosts />
      </section>

      <section>
        <HomeFeedPosts />
      </section>
    </div>
  );
}

export default HomeFeed;