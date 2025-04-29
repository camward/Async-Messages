interface SocketMsgProps {
  value: string;
  time: string;
  user: string;
}

interface MsgProps {
  position: "left" | "right";
}

export type { SocketMsgProps, MsgProps };
