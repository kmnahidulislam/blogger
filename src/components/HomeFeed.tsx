import { serverTimestamp } from "firebase/firestore";
import HomeFeedPosts from "./HomeFeedPosts";
import TrendingPosts from "./TrendingPosts";

function HomeFeed() {
  return (
    <div>
      <section>
        <TrendingPosts
          posts={[
            {
              title: "test",
              blogContents: "a",
              authorUid: "123",
              timestamp: serverTimestamp(),
              thumbnail: ".aa",
              likes: 0,
            },
          ]}
        />
      </section>

      <section>
        <HomeFeedPosts />
      </section>
    </div>
  );
}

export default HomeFeed;
