import StatusWrapper from "./StatusWrapper";
import Post from "./Post";
export default function LeftCol() {
    const postData = [
        {
            profilePic: "n2.svg",
            username: "User1",
            postPic: "b1.png",
            qtdLikes: "785 cutidas"
        },
        {
            profilePic: "n3.svg",
            username: "User2",
            postPic: "b2.jpg",
            qtdLikes: "8,785 cutidas"
        },
        {
            profilePic: "n4.svg",
            username: "User3",
            postPic: "b3.jpeg",
            qtdLikes: "9,785 cutidas"
        },
        {
            profilePic: "n5.svg",
            username: "User4",
            postPic: "b4.jpg",
            qtdLikes: "1,283 cutidas"
        },
        {
            profilePic: "n6.svg",
            username: "User4",
            postPic: "b5.jpeg",
            qtdLikes: "1,083 cutidas"
        },

    ];
    return (
        <div class="left-col">
            <StatusWrapper />
            {postData.map((post) => (
                <Post
                    profilePic={post.profilePic}
                    username={post.username}
                    postPic={post.postPic}
                    qtdLikes={post.qtdLikes}
                />
            ))}
        </div>
    );
}