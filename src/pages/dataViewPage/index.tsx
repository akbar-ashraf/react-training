import { useState, useEffect } from "react";
import { Loader } from "../../components/loader";
import { getRequest } from "../../api";

export const DataViewPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getRequest(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="dataView">
        <div className="cardBox">
          <h2>Posts Listing</h2>
          <div className="dataViewTableWrapper">
            <table id="dataViewTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>User ID</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody id="dataViewBody">
                {data &&
                  data.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.title}</td>
                      <td>{user.userId}</td>
                      <td>{user.body}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Loader isLoading={isLoading}></Loader>
    </div>
  );
};
