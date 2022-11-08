import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Process from "components/Process";
import ShowCharacters from "components/ShowCharacters";
import FormPost from "components/FormPost";
import { ModalRoute } from "seed/helpers";
import PropTypes from "prop-types";
import { PaginationFooter } from "seed/helpers";

const Romans = ({
  processes,
  pageNum = 1,
  totalPages = 0,
  onClickPage = () => {},
}) => (
  <BrowserRouter basename="/romans">
    <div>
      <div class="container w-50 clearfix mb-5 mt-2">
        <Link to="/new" className="btn btn-outline-primary float-right">
            Ejecutar Proceso
        </Link>
      </div>
      
      {processes.map((process) => Process(process))}
      
      <div class="col m-0 row justify-content-center">
        <PaginationFooter
            totalPages={totalPages}
            onClickPage={onClickPage}
            pageNum={pageNum}
        />
        </div>
    </div>
    <ModalRoute 
        path="/new" 
        component={FormPost} />
    
    <ModalRoute 
        path="/:processId(\d+)/characters" 
        component={ShowCharacters} />
  
  </BrowserRouter>
);

Romans.propTypes = {
  processes: PropTypes.array,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func,
};

export default Romans;
