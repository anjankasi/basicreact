import { JsxElement } from "typescript";

type SongItem = {
    title: string,
    artist: string;
}

const Song = (props: SongItem): JSX.Element => {
    return (<><li> Hello, song title is {props.title} and artist is {props.artist}</li>
    </>);
};

export default Song;