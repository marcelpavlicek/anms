type DiagramProps = {
  id: string;
};
export default function Diagram({ id }: DiagramProps) {
  const [a, b] = id.split("#");

  return (
    <div className="p-6">
      <iframe
        width="600"
        height="371"
        src={`https://lichess.org/study/embed/GtcclMzP/${a}?theme=newspaper&pieceSet=fresca#${b}`}
        className="border-0"
      ></iframe>
    </div>
  );
}
