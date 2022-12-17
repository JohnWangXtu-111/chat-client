const messageType = {
  text: 0,
  image: 1,
};

class Message {
  constructor(type, content, time) {
    this.type = type;
    this.content = content;
    this.time = new Date(time).getTime();
    switch (type) {
      case messageType.image:
        this.tinyShow = "[图片]";
        break;
      default:
        this.tinyShow = content;
    }
  }
}


export default Message;