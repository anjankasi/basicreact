import { JsxElement } from "typescript";
import Song from "./Song";

type SongItem = {
    title: string,
    artist: string;
}

const SongList = (): JSX.Element => {
    return (<><ul> <Song title="ABC" artist="XYZ" />
    <Song title="CHD" artist="QAZ" /></ul></>);
};

export default SongList;