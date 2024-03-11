export default function HobbyLinks(){
    let hobbyLinks = ["https://bookshop.org/", "https://www.sweetwater.com/", "https://www.gamestop.com/"];

    return(
        <div>
            <a href = {hobbyLinks[0]}>Reading</a>
            <a href = {hobbyLinks[1]}>Writing/Playing Music</a>
            <a href = {hobbyLinks[2]}>Playing Video Games</a>
        </div>
    );

}