import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Dashboard: React.FC = () => { 
  const sideBarMenu: SideBarMenuType = [
    { label: "Users" },
    { label: "Contacts" },
    { label: "Chat" },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Sidebar className="!sticky !w-[319px] bg-gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
              <div className="md:h-[169px] sm:h-[226px] h-[282px] relative w-full">
                <div className="flex flex-col gap-9 h-full items-center justify-start m-auto w-full">
                  <div className="bg-gray-900_01 flex flex-col items-end justify-start p-6 sm:px-5 w-full">
                    <div className="flex items-center p-3">

                  <Text
                className="mr-[70px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsExtraBold30"
                >
                DASHBOARD
              </Text>
                    <Img
                      className="h-7 mr-1.5 w-7"
                      src="images/img_user.svg"
                      alt="user"
                      />
                      </div>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Img
                      className="h-[52px] mx-auto object-cover w-full"
                      src="images/img_highlightedrectangle.png"
                      alt="highlightedrect"
                    />
                    <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start ml-[50px] mt-[-41.56px] w-[10%] z-[1]">
                      <div className="flex items-center">
                      <Img
                        className="h-[30px] w-[29px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                        />
                      <Text className="text-[15px] text-white-A700 ml-4">
                        Dashboard
                      </Text>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[15%] flex flex-col items-center justify-start left-[5%]">
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtPoppinsRegular12"
                  >
                    CUSTOM
                  </Text>
                </div>
              </div>

              <div className="flex md:gap-10 items-center w-full mt-[-5%] ml-[5%]">
                    <div className="flex md:px-10 sm:px-5 items-center">
                    <Img
                        className="h-7 w-7"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text className="text-[13px] text-white-A700 ml-4 mr-2">
                        Applications
                      </Text>
                <Img
                  className="h-[20px] mt-3 ml-32"
                  src="images/img_arrows.svg"
                  alt="arrows"
                  />
                  </div>
                  </div>

                  <div className="mt-[40px] ml-[30px] mr-8">
                    {sideBarMenu?.map((menu) => (
                      <div className="flex m-0 p-0 gap-0 h-16">
                        <Img
                    className="h-24 mr-3 mt-[10px] ml-3"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text className=" text-gray-400 text-sm mr-auto">
                        {menu.label}
                  </Text>
                        <Img
                  className="h-[5px] mt-[10px] transform -rotate-90"
                  src="images/img_arrow.svg"
                  alt="arrows"
                />
                      </div>
                    ))}
                    <div className="flex md:gap-10 items-center w-full ml-[-4%]">
                    <div className="flex md:px-10 sm:px-5 items-center">
                    <Img
                    className="h-7 w-7"
                    src="images/img_iconsfaded.svg"
                    alt="iconsfaded"
                  />
                      <Text className="text-[15px]  text-gray-400 ml-4 mr-">
                        Pages
                      </Text>
                <Img
                  className="h-[5px] mt-[-3px] ml-[10.2rem] transform -rotate-90"
                  src="images/img_arrow.svg"
                  alt="arrows"
                  />
                  </div>
                  </div>

                  </div>

            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-[5px] justify-end pr-[13px] py-[13px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-auto mr-[22px] mt-[3px] w-[30%] md:w-full">
                  <Img
                    className="h-7 md:mt-0 mt-1.5"
                    src="images/img_icons.svg"
                    alt="icons"
                  />
                  <Text
                    className="md:ml-[0] ml-[47px] md:mt-0 mt-2 text-[11px] text-blue_gray-300"
                    size="txtPoppinsMedium11"
                  >
                    Nick Thomas
                  </Text>
                  <Button
                    className="cursor-pointer h-[42px] leading-[normal] md:ml-[0] ml-[29px] text-[17px] text-center w-[43px] mr-[8px]"
                    shape="round"
                    color="teal_50"
                  >
                    N
                  </Button>
                </div>
                <Line className="bg-blue_gray-50_01 h-[2px] w-[99%]" />
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between p-2.5 shadow-bs w-full">
                <div className="flex md:flex-1 flex-row items-end justify-between mb-1 md:ml-[0] ml-[25px] w-[19%] md:w-full">
                  <Text
                    className="my-2 text-[13px] text-gray-800"
                    size="txtPoppinsMedium13"
                  >
                    Dashboard
                  </Text>
                  <Line className="bg-blue_gray-50_02 h-[26px] mb-[3px] mt-2 w-px" />
                  <Text
                    className="bg-orange-50 h-[38px] justify-center pb-[11px] pl-3 sm:pr-5 pr-6 pt-[7px] rounded text-[13px] text-amber-A700 w-[95px]"
                    size="txtPoppinsMedium13AmberA700"
                  >
                    Add New
                  </Text>
                </div>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[35px] md:mt-0 my-0.5 w-[29%] md:w-full">
                  <div className="h-[33px] md:h-[35px] sm:mt-0 mt-0.5 relative w-[17%] sm:w-full ml-auto">
                    <Text
                      className="ml-2.5 my-auto text-[13px] text-blue_gray-300"
                      size="txtPoppinsMedium13Bluegray300"
                    >
                      Today
                    </Text>
                    <Button
                      className="absolute cursor-pointer font-medium h-full inset-[0] justify-center leading-[normal] m-auto min-w-[71px] text-[13px] text-center"
                      shape="round"
                    >
                      Today
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-[13px] text-blue_gray-300"
                      size="txtPoppinsMedium13Bluegray300"
                    >
                      Month
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[51px] sm:mt-0 mt-[7px]">
                    <Text
                      className="text-[13px] text-blue_gray-300"
                      size="txtPoppinsMedium13Bluegray300"
                    >
                      Year
                    </Text>
                  </div>
                  <Text
                    className="bg-gray-100 h-[38px] justify-center sm:ml-[0] ml-[60px] pb-[11px] pl-4 sm:pr-5 pr-7 pt-[7px] rounded text-[13px] text-blue_gray-300_01 w-[93px]"
                    size="txtPoppinsMedium13Bluegray30001"
                  >
                    Actions
                  </Text>
                  <Img
                    className="h-9 ml-8 sm:ml-[0] w-9"
                    src="images/img_fileplusicon.svg"
                    alt="fileplusicon"
                  />
                </div>
              </div>
              <div className="h-[1094px] sm:h-[1286px] md:h-[2912px] mt-[33px] relative w-[96%] md:w-full">
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col gap-[34px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[39px] items-center justify-start w-[70%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start pb-[80px] rounded-[12px] w-[49%] md:w-full">
                        <div className="bg-red-A200 flex flex-col items-center justify-start pt-[22px] rounded-[12px] w-full">
                          <div className="flex flex-col gap-12 items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-[88%] md:w-full">
                              <Text
                                className="mt-[3px] text-[17px] text-white-A700"
                                size="txtPoppinsSemiBold17"
                              >
                                Categories
                              </Text>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[85px] rounded-md"
                                rightIcon={
                                  <div className="mt-[5px] mb-2 ml-[13px]">
                                    <Img
                                    className="invert brightness-0"
                                      src="images/img_arrow.svg"
                                      alt="Arrow"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="white_A700_65"
                              >
                                <div className="font-semibold leading-[normal] text-[11px] text-left">
                                  Export
                                </div>
                              </Button>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[141px] items-center justify-start w-full"
                              style={{
                                backgroundImage: "url('images/img_group8.svg')",
                              }}
                            >
                              <Img
                                className="mt-[8px] ml-[-5px]"
                                src="images/img_vector6.svg"
                                alt="vectorSix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-end p-[9px] rounded-[12px] w-[49%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] mt-[13px] w-[89%] md:w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[17px] text-blue_gray-700_02"
                                size="txtPoppinsSemiBold17Bluegray70002"
                              >
                                Recent Activities
                              </Text>
                              <Text
                                className="mt-1 text-blue_gray-400_01 text-xs"
                                size="txtPoppinsMedium12"
                              >
                                890,344 Sales
                              </Text>
                            </div>
                            <Img
                              className="h-1.5"
                              src="images/img_grid_blue_gray_200.svg"
                              alt="grid_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] mt-5 w-[90%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-full">
                            <div className="flex flex-col h-[61px] items-end justify-start w-[61px]">
                              <div className="flex flex-row gap-[9px] items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-700_02 text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  08:42
                                </Text>
                                <div className="border-[3px] border-gray-800_01 border-solid h-[13px] rounded-md w-[13px]"></div>
                              </div>
                              <Line className="bg-indigo-50 h-10 mr-[5px] rounded-[1px] w-[3px]" />
                            </div>
                            <Text
                              className="sm:flex-1 leading-[20.00px] text-blue_gray-400_01 text-xs w-[83%] sm:w-full"
                              size="txtPoppinsRegular12Bluegray40001"
                            >
                              Outlines keep you honest. Indulging in poorly
                              driving and keep structure
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] w-[90%] md:w-full">
                          <div className="flex sm:flex-row flex-row gap-[11px] items-start justify-start w-full">
                            <div className="flex flex-col items-end justify-start w-[61px]">
                              <div className="flex flex-row gap-3 items-center justify-between w-full">
                                <Text
                                  className="text-blue_gray-700_02 text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  10:00
                                </Text>
                                <div className="border-[3px] border-cyan-400 border-solid h-[13px] rounded-md w-[13px]"></div>
                              </div>
                              <Line className="bg-indigo-50 h-8 mr-[5px] rounded-[1px] w-[3px]" />
                            </div>
                            <Text
                              className="mt-0.5 text-[13px] text-blue_gray-700_02"
                              size="txtPoppinsSemiBold13"
                            >
                              AEOL meeting with
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex flex-col gap-px items-center md:ml-[0] ml-[2px] w-[90%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                            <div className="flex sm:flex-row flex-row gap-[11px] items-start justify-start w-full">
                              <div className="flex flex-col items-end justify-start w-[59px]">
                                <div className="flex flex-row gap-3 items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    14:37
                                  </Text>
                                  <div className="border-[3px] border-red-A200 border-solid h-[13px] rounded-md w-[13px]"></div>
                                </div>
                                <Line className="bg-indigo-50 h-6 mr-[5px] rounded-[1px] w-[3px]" />
                              </div>
                              <Text
                                className="mt-0.5 text-[13px] text-blue_gray-700_02"
                                size="txtPoppinsSemiBold13"
                              >
                                <span className="text-blue_gray-700_02 font-poppins text-left font-semibold">
                                  Make deposit{" "}
                                </span>
                                <span className="text-deep_purple-A200 font-poppins text-left font-semibold">
                                  USD 700
                                </span>
                                <span className="text-blue_gray-700_02 font-poppins text-left font-semibold">
                                  {" "}
                                  to ESL
                                </span>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start md:w-full w-[90%]">
                            <div className="flex sm:flex-col flex-row gap-[11px] items-start justify-start w-full">
                              <div className="flex sm:flex-1 flex-col items-end justify-start w-[15%] sm:w-full">
                                <div className="flex flex-row gap-[13px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-700_02 text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    16:50
                                  </Text>
                                  <div className="border-[3px] border-blue-400 border-solid h-[13px] rounded-md w-[13px]"></div>
                                </div>
                                <Line className="bg-indigo-50 h-[55px] mr-[5px] rounded-[1px] w-[3px]" />
                              </div>
                              <Text
                                className="sm:flex-1 leading-[20.00px] text-blue_gray-400_01 text-xs w-[83%] sm:w-full"
                                size="txtPoppinsRegular12Bluegray40001"
                              >
                                Outlines keep you honest. Indulging in poorly
                                driving and keep structure keep you honest great
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between w-full">
                      <div className="bg-white-A700 flex md:flex-1 flex-col gap-[21px] items-start justify-start p-[25px] sm:px-5 rounded-[12px] w-[34%] md:w-full">
                        <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
                          <Text
                            className="text-[17px] text-gray-900_02"
                            size="txtPoppinsSemiBold17Gray90002"
                          >
                            Sales Progress
                          </Text>
                          <Img
                            className="h-1.5"
                            src="images/img_grid_blue_gray_200.svg"
                            alt="grid_Two"
                          />
                        </div>
                        <List
                          className="flex flex-col gap-[29px] mb-[76px] ml-1 md:ml-[0] w-[49%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="deep_purple_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_thumbsup_deep_purple_a200.svg"
                                  alt="thumbsup"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="orange_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="cyan_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_maximize.svg"
                                  alt="maximize"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="pink_50"
                              >
                                <Img
                                  className="h-5"
                                  src="images/img_settings_red_a200.svg"
                                  alt="settings"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                              <Button
                                className="flex h-10 items-center justify-center rounded-[12px] w-10"
                                color="blue_50"
                              >
                                <Img
                                  className="h-[22px]"
                                  src="images/img_checkmark.svg"
                                  alt="checkmark"
                                />
                              </Button>
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[13px] text-black-900"
                                  size="txtPoppinsMedium13Black900"
                                >
                                  Briviba SaaS
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  PHP, SQLite, Artisan CLIмм
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[22px] sm:px-5 rounded-[12px] w-[64%] md:w-full">
                        <div className="flex flex-col gap-[26px] items-center justify-start mb-0.5 w-[99%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="text-gray-900_02 text-lg"
                                  size="txtPoppinsMedium18"
                                >
                                  New Arrivals
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsMedium12Bluegray200"
                                >
                                  More than 400+ new members
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between w-[21%]">
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsSemiBold12"
                                >
                                  Month
                                </Text>
                                <Text
                                  className="text-blue_gray-200 text-xs"
                                  size="txtPoppinsSemiBold12"
                                >
                                  Week
                                </Text>
                                <Button
                                  className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded-md text-center text-xs"
                                  shape="round"
                                  color="blue_gray_700_02"
                                >
                                  Day
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[27%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                  <Button
                                    className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                    shape="round"
                                    size="md"
                                  >
                                    <Img
                                      className="h-7"
                                      src="images/img_184plurk.svg"
                                      alt="184plurk"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-center justify-start mt-1">
                                    <Text
                                      className="text-blue_gray-700_02 text-sm"
                                      size="txtPoppinsSemiBold14"
                                    >
                                      Sant Outstanding
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[13px] text-blue_gray-200"
                                      size="txtPoppinsMedium13Bluegray200"
                                    >
                                      FTP: bprow@bnc.cc
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[97%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                  <Button
                                    className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                    shape="round"
                                    size="md"
                                  >
                                    <Img
                                      className="h-7"
                                      src="images/img_186telegram.svg"
                                      alt="186telegram"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start mt-1">
                                    <Text
                                      className="text-blue_gray-700_02 text-sm"
                                      size="txtPoppinsSemiBold14"
                                    >
                                      Telegram Application
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[13px] text-blue_gray-200"
                                      size="txtPoppinsMedium13Bluegray200"
                                    >
                                      FTP: bprow@bnc.cc
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                  <Button
                                    className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                    shape="round"
                                    size="md"
                                  >
                                    <Img
                                      className="h-[29px]"
                                      src="images/img_194puzzle.svg"
                                      alt="194puzzle"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start mt-1">
                                    <Text
                                      className="text-blue_gray-700_02 text-sm"
                                      size="txtPoppinsSemiBold14"
                                    >
                                      Cisco Management
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[13px] text-blue_gray-200"
                                      size="txtPoppinsMedium13Bluegray200"
                                    >
                                      FTP: bprow@bnc.cc
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-end justify-between w-full">
                                  <Button
                                    className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                    shape="round"
                                    size="md"
                                  >
                                    <Img
                                      className="h-[29px]"
                                      src="images/img_182bebo.svg"
                                      alt="182bebo"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start mt-[5px]">
                                    <Text
                                      className="text-blue_gray-700_02 text-sm"
                                      size="txtPoppinsSemiBold14"
                                    >
                                      HR Management
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[13px] text-blue_gray-200"
                                      size="txtPoppinsMedium13Bluegray200"
                                    >
                                      FTP: bprow@bnc.cc
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                                  <Button
                                    className="flex h-[50px] items-center justify-center rounded-md w-[50px]"
                                    shape="round"
                                    size="md"
                                  >
                                    <Img
                                      className="h-[29px]"
                                      src="images/img_group1.svg"
                                      alt="groupOne"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start mt-1">
                                    <Text
                                      className="text-blue_gray-700_02 text-sm"
                                      size="txtPoppinsSemiBold14"
                                    >
                                      KTR Mobile Application
                                    </Text>
                                    <Text
                                      className="mt-1 text-[13px] text-blue_gray-200"
                                      size="txtPoppinsMedium13Bluegray200"
                                    >
                                      FTP: bprow@bnc.cc
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-9 items-end justify-start md:ml-[0] ml-[212px] w-[11%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                                <div className="flex flex-col items-end justify-start w-full">
                                  <Text
                                    className="text-blue_gray-700_02 text-right text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    $2,000,000
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    Paid
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start mt-[25px] w-full">
                                  <Text
                                    className="text-blue_gray-700_02 text-right text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    $4,600,000
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    Paid
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start ml-3 md:ml-[0] mt-[35px]">
                                  <Text
                                    className="text-blue_gray-700_02 text-right text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    $560,000
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    Paid
                                  </Text>
                                </div>
                                <div className="flex flex-col items-end justify-start md:ml-[0] ml-[23px] mt-[35px]">
                                  <Text
                                    className="text-blue_gray-700_02 text-right text-sm"
                                    size="txtPoppinsSemiBold14"
                                  >
                                    $57,000
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                    size="txtPoppinsMedium13Bluegray200"
                                  >
                                    Paid
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-end justify-start w-full">
                                <Text
                                  className="text-blue_gray-700_02 text-right text-sm"
                                  size="txtPoppinsSemiBold14"
                                >
                                  $45,200,000
                                </Text>
                                <Text
                                  className="mt-[3px] text-[13px] text-blue_gray-200 text-right"
                                  size="txtPoppinsMedium13Bluegray200"
                                >
                                  Paid
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[54px] items-end justify-start md:ml-[0] ml-[59px] w-[10%] md:w-full">
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[74px] rounded-md text-[11px] text-center"
                                shape="round"
                                color="deep_purple_50"
                                size="xs"
                              >
                                Approved
                              </Button>
                              <div className="flex flex-col gap-[54px] items-start justify-start w-full">
                                <Text
                                  className="bg-orange-50 h-[26px] justify-center pb-0.5 pt-1.5 px-[9px] rounded-md text-[11px] text-amber-A700 w-20"
                                  size="txtPoppinsMedium11AmberA700"
                                >
                                  In Progress
                                </Text>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[65px] ml-4 md:ml-[0] rounded-md text-[11px] text-center"
                                  shape="round"
                                  color="cyan_50"
                                  size="xs"
                                >
                                  Success
                                </Button>
                                <Button
                                  className="cursor-pointer font-medium leading-[normal] min-w-[67px] ml-3.5 md:ml-[0] rounded-md text-[11px] text-center"
                                  shape="round"
                                  color="pink_50"
                                  size="xs"
                                >
                                  Rejected
                                </Button>
                                <Text
                                  className="bg-orange-50 h-[26px] justify-center pb-0.5 pt-1.5 px-[9px] rounded-md text-[11px] text-amber-A700 w-[81px]"
                                  size="txtPoppinsMedium11AmberA700"
                                >
                                  In Progress
                                </Text>
                              </div>
                            </div>
                            <Img
                              className="h-[352px] md:ml-[0] ml-[58px]"
                              src="images/img_col5.svg"
                              alt="colFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="absolute sm:flex-col flex-row md:gap-10 gap-[67px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 left-[0] top-[0] w-[70%]"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start p-7 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start my-5 w-[95%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_thumbsup_blue_gray_200.svg"
                        alt="thumbsup"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-sm"
                        size="txtPoppinsSemiBold14Bluegray200"
                      >
                        <>
                          SaaS
                          <br />
                          Application
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start my-[18px] w-[95%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_grid_blue_gray_200_48x48.svg"
                        alt="grid"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-sm"
                        size="txtPoppinsSemiBold14Bluegray200"
                      >
                        <>
                          Main
                          <br />
                          Categories
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-teal-300 flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-[15px] items-center justify-start my-2.5 w-[93%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text
                        className="leading-[19.00px] text-center text-sm text-white-A700"
                        size="txtPoppinsSemiBold14WhiteA700"
                      >
                        <>
                          Video
                          <br />
                          Tutorials
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-start justify-start p-9 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-3.5 items-center justify-start my-3 w-[92%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_equalizer.svg"
                        alt="equalizer"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-sm"
                        size="txtPoppinsSemiBold14Bluegray200"
                      >
                        <>
                          Sales
                          <br />
                          Statistics
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_03 border-solid flex flex-col items-center justify-start p-10 sm:px-5 rounded-[12px] w-full">
                    <div className="flex flex-col gap-4 items-center justify-start my-[7px] w-[93%] md:w-full">
                      <Img
                        className="h-12 w-12"
                        src="images/img_checkmark_blue_gray_200.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="leading-[19.00px] text-blue_gray-200 text-center text-sm"
                        size="txtPoppinsSemiBold14Bluegray200"
                      >
                        <>
                          ARC
                          <br />
                          Security
                        </>
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[28%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-[30px] grid grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_thumbsup_blue_gray_300_02.svg"
                          alt="thumbsup"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_settings_blue_gray_300_02.svg"
                          alt="settings"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_close_blue_gray_300_02.svg"
                          alt="close"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_ecmecm002.svg"
                          alt="ecmecm002"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col gap-[43px] justify-start p-[22px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                        <Img
                          className="h-[50px] mt-[3px] w-[50px]"
                          src="images/img_sort.svg"
                          alt="sort"
                        />
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[7px] mr-[42px] text-base text-blue_gray-800"
                          size="txtPoppinsSemiBold16"
                        >
                          Great Gifts
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between mt-[29px] w-[96%] md:w-full mb-4">
                <div className="bg-white-A700 flex flex-col gap-[29px] items-center justify-start p-6 sm:px-5 rounded-[12px] w-[63%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-gray-900_02 text-lg"
                          size="txtPoppinsMedium18"
                        >
                          Recent Stats
                        </Text>
                        <Text
                          className="text-blue_gray-400_01 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          More than 400+ new members
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[21%]">
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsSemiBold12"
                        >
                          Month
                        </Text>
                        <Text
                          className="text-blue_gray-200 text-xs"
                          size="txtPoppinsSemiBold12"
                        >
                          Week
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] min-w-[53px] rounded-[12px] text-center text-xs"
                          color="blue_gray_700_02"
                        >
                          Day
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-0.5 w-[93%] md:w-full">
                    <div className="flex flex-col gap-[5px] justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <div className="flex flex-col gap-[41px] items-start justify-start">
                          <Text
                            className="text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            150
                          </Text>
                          <Text
                            className="h-[18px] text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            120
                          </Text>
                          <Text
                            className="text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            90
                          </Text>
                          <Text
                            className="text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            60
                          </Text>
                          <Text
                            className="text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            30
                          </Text>
                          <Text
                            className="text-blue_gray-200 text-xs"
                            size="txtPoppinsMedium12Bluegray200"
                          >
                            0
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[300px] items-center justify-start pt-[13px] px-[13px] w-[94%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group9.svg')",
                          }}
                        >
                          <Img
                            className="h-[287px]"
                            src="images/img_columns.svg"
                            alt="columns"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[84px] w-[80%] md:w-full gap-[1px]">
                        <Text
                          className="text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          1 Aug
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[85px] text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          8 Aug
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[78px] text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          151 Aug
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[75px] text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          22 Aug
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[76px] text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          29 Aug
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[79px] text-blue_gray-200 text-center text-xs"
                          size="txtPoppinsMedium12Bluegray200"
                        >
                          5 Sep
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
                      <div className="bg-orange-50 flex sm:flex-1 flex-col gap-[18px] items-center justify-end p-[26px] sm:px-5 rounded-[12px] w-[47%] sm:w-full">
                        <Img
                          className="h-[102px] mt-0.5"
                          src="images/img_equalizer_amber_a700.svg"
                          alt="equalizer"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-lime-900_70 sm:text-xl"
                          size="txtPoppinsMedium24"
                        >
                          Weekly Sales
                        </Text>
                      </div>
                      <div className="bg-deep_purple-50 flex sm:flex-1 flex-col gap-[19px] items-center justify-start p-[18px] rounded-[12px] w-[47%] sm:w-full">
                        <Img
                          className="h-[108px]"
                          src="images/img_adduser.svg"
                          alt="adduser"
                        />
                        <Text
                          className="mb-[11px] text-2xl md:text-[22px] text-deep_purple-A200_7a sm:text-xl"
                          size="txtPoppinsMedium24DeeppurpleA2007a"
                        >
                          New Users
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between w-full">
                      <div className="bg-pink-50_01 flex sm:flex-1 flex-col gap-1.5 items-center justify-start p-5 rounded-[12px] w-[47%] sm:w-full">
                        <Img
                          className="h-28"
                          src="images/img_compiling.svg"
                          alt="compiling"
                        />
                        <Text
                          className="mb-4 text-2xl md:text-[22px] text-red-A200_7a sm:text-xl"
                          size="txtPoppinsMedium24RedA2007a"
                        >
                          Item Orders
                        </Text>
                      </div>
                      <div className="h-[211px] relative w-[47%] sm:w-full">
                        <div className="bg-cyan-50 h-[211px] m-auto rounded-[12px] w-full"></div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[146px]">
                          <Img
                            className="h-[108px] w-[107px]"
                            src="images/img_stockholmicons.svg"
                            alt="stockholmicons"
                          />
                          <Text
                            className="text-2xl md:text-[22px] text-teal-200 sm:text-xl"
                            size="txtPoppinsMedium24Teal200"
                          >
                            Bug Reports
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
