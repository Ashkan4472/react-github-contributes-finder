import { Grid } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CustomTable } from '../components/CustomTable';
import { FullWidthSearch } from '../components/home/FullWidthSearch';
import {
  selectRepoItems,
  selectRepoStatus,
  selectRepoTotalCount,
} from '../features/repo/selectors';
import { fetchRepos } from '../features/repo/slice';

const heads = [
  {
    field: 'id',
    title: 'ID',
  },
  {
    field: 'name',
    title: 'Repository Name',
  },
  {
    field: 'owner',
    title: 'Owner',
  },
];

export const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const status = useAppSelector(selectRepoStatus);
  const total = useAppSelector(selectRepoTotalCount);
  const repos = useAppSelector(selectRepoItems);
  const reshapedRepos = repos.map((repo) => {
    return {
      id: repo.id,
      name: repo.name,
      owner: repo.owner?.login ?? '',
    };
  });

  const [repoName, setRepoName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    dispatch(fetchRepos({ repoName, pageNumber: newPage + 1 }));
  };

  const navigateToContrib = (item: any) => {
    const url = `/${item.owner}/${item.name}`;
    navigate(url);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
      px={2}
      py={4}
    >
      <FullWidthSearch
        label="Repository Search"
        disabled={status === 'loading'}
        onSearch={(newRepo) => {
          setRepoName(newRepo);
          dispatch(fetchRepos({ repoName: newRepo }));
        }}
      />

      <CustomTable
        heads={heads}
        items={reshapedRepos}
        page={currentPage}
        total={total}
        isLoading={status === 'loading'}
        onPageChange={onPageChange}
        onRowClicked={navigateToContrib}
      />
    </Grid>
  );
};
