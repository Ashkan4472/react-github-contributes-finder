import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { CustomTable } from '../components/CustomTable';
import {
  selectCollabCollabs,
  selectCollabStatus,
} from '../features/collab/selectors';
import { fetchCollaborators } from '../features/collab/slice';

const heads = [
  {
    field: 'id',
    title: 'ID',
  },
  {
    field: 'login',
    title: 'Name',
  },
  {
    field: 'profile',
    title: 'Profile',
  },
];

export const Collaborators = () => {
  const params = useParams<{ owner: string; repo: string }>();
  const dispatch = useAppDispatch();

  const collabs = useAppSelector(selectCollabCollabs);
  const status = useAppSelector(selectCollabStatus);
  const reshapedCollabs = collabs.map((collab) => {
    return {
      id: collab.id,
      name: collab.login,
      profile: collab.url,
    };
  });

  // fetch contributors data
  useEffect(() => {
    dispatch(
      fetchCollaborators({
        owner: params.owner ?? '',
        repoName: params.repo ?? '',
      })
    );
  }, [dispatch, params]);

  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    dispatch(
      fetchCollaborators({
        owner: params.owner ?? '',
        repoName: params.repo ?? '',
        pageNumber: newPage + 1,
      })
    );
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
      <CustomTable
        heads={heads}
        items={reshapedCollabs}
        page={currentPage}
        onPageChange={onPageChange}
        total={reshapedCollabs.length}
        isLoading={status === 'loading'}
      />
    </Grid>
  );
};
