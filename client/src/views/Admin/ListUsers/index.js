import React, { useEffect } from "react";
import GridContainer from "components/Admin/Grid/GridContainer";
import GridItem from "components/Admin/Grid/GridItem";
import Card from "components/Admin/Card/Card";
import CardHeader from "components/Admin/Card/CardHeader";
import CardBody from "components/Admin/Card/CardBody";
import ShynnTable from "components/core/ShynnTable";
import { getAllUsers } from "redux/admin/admin.actions";
import { useSelector } from "react-redux";
import { useStableDispatch } from "redux/stableDispatch";

export const ListUsers = () => {
  const admin = useSelector((state) => state.admin);
  const dispatch = useStableDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Display Name",
        accessor: "displayName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  if (admin.users.length < 1) {
    return <h1>No user in database!</h1>;
  }

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary">
            <h4>List All Users</h4>
          </CardHeader>
          <CardBody>
            <ShynnTable
              data={admin.users}
              columns={columns}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
