import { useQuery, UseQueryOptions } from 'react-query'
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  sendAt: string;
  local: string;
  description: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

export async function getUsers (page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => {
    return{
      id: user.id,
      name: user.name,
      email: user.email,
      local: user.local,
      description: user.description,
      sendAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  });
  return {users, totalCount};
}

export function useUsers(page: number, options: UseQueryOptions){
  return useQuery(['users', page], () => getUsers(page), {
  staleTime: 1000 * 60 * 10,
  ...options,
})
}