import Image from "next/image";
import Link from "next/link";
import { Card, Col, Row } from "antd";
import {
      ArrowRightOutlined,
      CalendarOutlined,
      CommentOutlined,
      ProfileOutlined,
} from "@ant-design/icons";


const AllProducts = ({ allProducts }) => {
      const { Meta } = Card;
      return (
            <>
                  <h1 style={{
                        textAlign: "center", fontSize: "50px",
                        margin: "30px 0px"
                  }}
                  >
                        #All Products
                  </h1>
                  <Row
                        gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }}
                  >
                        {allProducts?.map((product) => (
                              <Col key={product.id} className="gutter-row" span={6}>
                                    <Card hoverable
                                          cover={
                                                <Image src={product?.imageSrc}
                                                      width={500}
                                                      height={200}
                                                      responsive
                                                      alt="product image"
                                                />
                                          }
                                    >
                                          <Meta title={product?.modelNo} />
                                          <div className="line"
                                                style={{
                                                      height: "5px",
                                                      margin: "20px 0",
                                                      background: "#000",
                                                      width: "100%",
                                                }}
                                          ></div>

                                          <p style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                width: "100%",
                                                color: "gray",
                                                margin: "10px 0px",
                                                fontSize: "12px",
                                          }}
                                          >
                                                <span>
                                                      <CalendarOutlined /> {product?.brandName}
                                                </span>
                                                <span>
                                                      <CommentOutlined /> {product?.rating}
                                                </span>
                                                <span>
                                                      <ProfileOutlined /> {product?.category}
                                                </span>
                                          </p>
                                    </Card>
                              </Col>
                        ))}
                  </Row>
            </>
      );
};

export default AllProducts;