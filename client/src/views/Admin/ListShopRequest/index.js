import React, { useEffect } from "react";
import GridContainer from "components/Admin/Grid/GridContainer";
import GridItem from "components/Admin/Grid/GridItem";

import Block from "@material-ui/icons/Block";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

import Card from "components/Admin/Card/Card";
import CardHeader from "components/Admin/Card/CardHeader";
import CardBody from "components/Admin/Card/CardBody";
import ShynnTable from "components/core/ShynnTable";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getRequests, changeRequestStatus } from "redux/shop/shop.actions";
import { useStableDispatch } from "redux/stableDispatch";

const ListShopRequest = () => {
  const shop = useSelector((state) => state.shop);

  const dispatch = useStableDispatch();
  useEffect(() => {
    dispatch(getRequests());
  }, [dispatch]);

  if (shop.requests.length < 1) {
    return <h1>No requests available.</h1>;
  }

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary">
            <h4>List All Shop Requests</h4>
          </CardHeader>
          <CardBody>
            <ShynnTable
              columns={[
                { Header: "Shop Name", accessor: "name" },
                { Header: "Requester", accessor: "owner.displayName" },
                { Header: "Identity Card", accessor: "identityCard" },
                { Header: "Address", accessor: "address" },
                { Header: "Status", accessor: "status" },
                { Header: "Actions", accessor: "actions" },
              ]}
              data={shop.requests?.map((item, key) => {
                return {
                  ...item,
                  actions: (
                    <div className="actions-right">
                      <IconButton
                        onClick={() => {
                          dispatch(changeRequestStatus(item._id, "accepted"));
                        }}
                      >
                        <Check />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          dispatch(changeRequestStatus(item._id, "refused"));
                        }}
                      >
                        <Block />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          var data = shop.requests;
                          data.find((o, i) => {
                            if (o.id === key) {
                              data.splice(i, 1);
                              console.log(data);
                              return true;
                            }
                            return false;
                          });
                          // setRequests(data);
                        }}
                      >
                        <Close />
                      </IconButton>
                    </div>
                  ),
                };
              })}
              // stickyHeader={true}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default ListShopRequest;
