import * as React from "react";
import styled from "styled-components";

type DashboardProps = {
  children: React.ReactNode;
};

const StyledDashboard = styled.div`
  background-color: ${props => props.theme.alabaster};
  border: 1px solid ${props => props.theme.silver};
  max-width: 600px;
  margin: ${props => props.theme.spacingRegular} auto;
  padding: ${props => props.theme.spacingLarge};
  text-align: left;
`

const DashboardHeader = styled.h1`
  font-size: ${props => props.theme.fontLarge};
`

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <StyledDashboard>
      <DashboardHeader>Tiny Task Tracker</DashboardHeader>
      {children}
    </StyledDashboard>
  );
};

export default Dashboard;