"use client";

import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button';
import Table from './Table';
import {Births, State} from './types';
import {getBirths, setBirths, AppDispatch} from "./store";
import LoadingIndicator from "./LoadingIndicator";
import ErrorAlert from "./ErrorAlert";

type Result = {
  births: Births;
};

export default function BirthList() {
  const births = useSelector((state: State) => getBirths(state));
  const [fetched, setFetched] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const onFetch = async () => {
    setFetched(true);
    const today: Date = new Date();
    const month: string = String(today.getMonth() + 1).padStart(2, '0');
    const day: string = String(today.getDate()).padStart(2, '0');

    try {
      const resp: Response = await fetch(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`);
      const result: Result = await resp.json();
      dispatch(setBirths(result.births));
    } catch {
      setError(true);
    }
  }

  return (
    <div>
      {error && <ErrorAlert/>}
      {!fetched && <Button onClick={onFetch} />}
      {fetched && !births.length && !error && <LoadingIndicator />}
      {!!births.length && <Table rows={births}/>}
    </div>
  );
}