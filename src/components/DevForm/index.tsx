import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Center,
  Divider,
  VStack,
  HStack,
  Button,
  Img,
  useBreakpointValue,
  List,
ListItem,
Input,
ListIcon,
OrderedList,
UnorderedList,
} from "@chakra-ui/react";
import Swal from 'sweetalert2';

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [url, setURL] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude.toString());
        setLongitude(longitude.toString());
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await Swal.fire({
      imageUrl: url,
      imageHeight: 300,
      imageAlt: github_username,
      title: 'Deseja enviar esta foto?',
      text: "Não será possível alterar!",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#D53F8C',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, enviar!',
    }).then((result) => {
      if (result.isConfirmed) {
        onSubmit({
          github_username,
          techs,
          url,
          latitude,
          longitude,
        });
        Swal.fire(
          'Sucesso!',
          'A imagem foi enviada.',
          'success'
          )
          setGithubUsername('');
          setTechs('');
          setURL('');
        }
      })
      
      // await 


  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Box mt="20px" className="input-block">
        <Text color="#9699B0" fontSize="14px" fontWeight="bold" display="block" htmlFor="techs">Nome e sobrenome</Text>
        <Input
        color="#9699B0"
        border="0"
        borderRadius="0"
        borderBottom="1px solid #9699B0"
          name="techs"
          id="techs"
          required
          value={techs}
          placeholder="e. g: John Smith"
          onChange={e => setTechs(e.target.value)}
        />
      </Box>


      <Box mt="20px" className="input-block">
        <Text color="#9699B0" fontSize="14px" fontWeight="bold" display="block" htmlFor="github_username">Telefone</Text>
        <Input 
        color="#9699B0"
        border="0"
        borderRadius="0"
        borderBottom="1px solid #9699B0"
          name="github_username" 
          id="github_username" 
          required
          value={github_username}
          placeholder="Ex: 5581992943936"
          onChange={e => setGithubUsername(e.target.value)}
        />
      </Box>


      <Box mt="20px" className="input-block">
        <Text color="#9699B0" fontSize="14px" fontWeight="bold" display="block" htmlFor="avatar_url">Foto de perfil</Text>
        <Input 
        color="#9699B0"
        border="0"
        borderRadius="0"
        borderBottom="1px solid #9699B0"
          name="urlPhoto" 
          id="urlPhoto" 
          required
          value={url}
          placeholder="URL da imagem"
          onChange={e => setURL(e.target.value)}
        />
      </Box>


      <Box className="input-group" mt="20px" display="grid" gridGap="20px" gridTemplateColumns="1fr 1fr">
        <Box className="input-block">
          <Text color="#9699B0" fontSize="14px" fontWeight="bold" display="block" htmlFor="latitude">Latitude</Text>
          <Input 
          color="#9699B0"
          border="0"
          borderRadius="0"
          borderBottom="1px solid #9699B0"
            type="number" 
            name="latitude" 
            id="latitude" 
            required 
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </Box>

        <Box className="input-block">
          <Text color="#9699B0" fontSize="14px" fontWeight="bold" display="block" htmlFor="longitude">Longitude</Text>
          <Input
          color="#9699B0"
          border="0"
          borderRadius="0"
          borderBottom="1px solid #9699B0"
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </Box>
      </Box>

      <Button 
      width= '100%'
      border= '0'
      margin-top= '30px'
      background= '#D53F8C'
      border-radius= '0.375rem'
      padding= '15px 20px'
      font-size= '16px'
      mt="20px"
      font-weight= 'bold'
      color= '#fff'
      _hover={{bg:"#B83280"}}
      transition= 'background 0.5s'
       type="submit">Salvar</Button>
    </Box>
  );
}