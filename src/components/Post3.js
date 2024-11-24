import { Card } from "react-bootstrap";
const Post3 = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://www.investopedia.com/thmb/J33BG-Cf03bW8-O4kXJfuht3gHA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/algorithm-df9b57e8ea7c494b891da25987643fab.jpg"
        width={20}
        height={250}
      />
      <Card.Body>
        <Card.Title>Algorithm</Card.Title>
        <Card.Text>
          The word Algorithm means “a process or set of rules to be followed in
          calculations or other problem-solving operations”. Therefore Algorithm
          refers to a set of rules/instructions that step-by-step define how a
          work is to be executed upon in order to get the expected results.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post3;
