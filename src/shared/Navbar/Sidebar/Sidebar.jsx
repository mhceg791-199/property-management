import React from "react";
import "./Sidebar.css";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  Drawer,
  Card,
} from "@material-tailwind/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PlusIcon from "./plusIcon";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../../Footer/SocialMedia/SocialMedia";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleNavigate = (pageName, section) => {
    navigate(pageName, { state: { scrollTo: section } });
    setIsDrawerOpen(false);
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className={`h-8 w-8 stroke-2 ${"text-mainGold"}`} />
        )}
      </IconButton>
      <Drawer
        placement="right"
        className={`p-0 bg-mainColor ${isDrawerOpen ? "w-full" : "w-auto"}`}
        style={{ width: isDrawerOpen ? "80vw" : "auto" }}
        open={isDrawerOpen}
        onClose={closeDrawer}
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal text-lightColor itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-house text-xl pe-2"></i> HOME
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/about", "firstSection");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal text-lightColor  itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    {/* <i className="fa-solid fa-sack-dollar "></i>  */}
                    <i className="fa-solid fa-gears text-xl pe-2"></i>ABOUT{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      handleNavigate("/services", "firstSection");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto text-lightColor  font-normal itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-hand-holding-dollar text-xl pe-2"></i>{" "}
                    SERVICES{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/career");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal text-lightColor  itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-person-running text-xl pe-2"></i>{" "}
                    CAREER{" "}
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Accordion from opening
                      navigate("/contact-us");
                      setIsDrawerOpen(false);
                    }}
                    color="white"
                    className={`mr-auto font-normal text-lightColor  itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    <i className="fa-solid fa-earth-asia text-xl pe-2"></i>{" "}
                    CONTACT US
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <hr className="my-2 border-white-50 " />
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={() => handleNavigate("/privacy")}
                    color="white"
                    className={`mr-auto font-normal text-lightColor  itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    Privacy Policy
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <Accordion open={open === 1}>
              {" "}
              <ListItem
                className={`p-0 item hover:bg-transparent mainItem ${
                  open != 1 ? "bg-transparent" : "bg-transparent"
                }`}
                selected={open === 2}
              >
                <AccordionHeader className="border-b-0 p-3 px-0 !hover:text-mainGold ">
                  <ListItemPrefix>
                    <PlusIcon
                      className={`mx-auto h-5 w-5 text-white borderIcon opacity-0  transition-transform `}
                      condition={open == 2}
                    />
                  </ListItemPrefix>
                  <Typography
                    onClick={() => handleNavigate("/terms")}
                    color="white"
                    className={`mr-auto font-normal text-lightColor  itemText ${
                      open === 1 ? "text-mainGold" : ""
                    }`}
                  >
                    Terms and conditions
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>
            <hr className="my-2 border-white-50 mb-10" />
            <SocialMedia />
          </List>
        </Card>
      </Drawer>
    </>
  );
}
