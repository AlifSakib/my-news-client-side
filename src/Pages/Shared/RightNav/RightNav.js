import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h4>Find Us On</h4>
        <div>
          <ListGroup>
            <ListGroup.Item className="mb-2">
              <FaFacebook></FaFacebook> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaWhatsapp></FaWhatsapp> Whats App
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaTwitter></FaTwitter> Twitter
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaTwitch></FaTwitch> Twitch
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightNav;
