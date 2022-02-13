package com.estudos.locacao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.estudos.locacao.dto.EnderecoDTO;
import com.estudos.locacao.dto.ImovelDTO;
import com.estudos.locacao.entidades.Endereco;
import com.estudos.locacao.entidades.Imovel;
import com.estudos.locacao.repositories.ImovelRepositorio;

@Service
public class ImovelService {

    @Autowired
    private ImovelRepositorio imovelRepo;

    @Transactional(readOnly = true)
    public Page<ImovelDTO> findAll(Pageable pageable) {
        Page<Imovel> result = imovelRepo.findAll(pageable);
        Page<ImovelDTO> page = result.map(x -> new ImovelDTO(x));
        return page;
    }

    @Transactional(readOnly = true)
    public ImovelDTO findById(Long id) {
        Imovel result = imovelRepo.findById(id).orElse(null);
        if (result == null) {
            return null;
        }
        ImovelDTO dto = new ImovelDTO(result);
        return dto;
    }


    @Transactional
    public ImovelDTO save(ImovelDTO imovelDTO) {

        EnderecoDTO dto = imovelDTO.getEndereco();
        Endereco endereco = new Endereco(null, dto.getCep(), dto.getLogradouro(), dto.getNumero(), dto.getBairro(), dto.getComplemento(), dto.getCidade(), dto.getEstado());

        Imovel imovel = new Imovel();
        imovel.setEndereco(endereco);
        imovel.setTitle(imovelDTO.getTitle());
        imovel.setImage(imovelDTO.getImage());
        imovel.setCategoria(imovelDTO.getCategoria());
        imovel.setDescricao(imovelDTO.getDescricao());

        imovel = imovelRepo.save(imovel);
        return new ImovelDTO(imovel);
    }

    @Transactional
    public void deleteById(Long id) {
        if (imovelRepo.existsById(id)) {
            imovelRepo.deleteById(id);
        }

    }

    @Transactional
    public ImovelDTO atualizaImovel(ImovelDTO imovelDTO) {

        Imovel imovel = imovelRepo.findById(imovelDTO.getId()).orElse(null);

        EnderecoDTO dto = imovelDTO.getEndereco();

        imovel.setTitle(imovelDTO.getTitle());
        imovel.setImage(imovelDTO.getImage());
        imovel.setCategoria(imovelDTO.getCategoria());
        imovel.setDescricao(imovelDTO.getDescricao());

        Endereco endereco = imovel.getEndereco();
        endereco.setBairro(dto.getBairro());
        endereco.setCep(dto.getCep());
        endereco.setCidade(dto.getCidade());
        endereco.setComplemento(dto.getComplemento());
        endereco.setEstado(dto.getEstado());
        endereco.setLogradouro(dto.getLogradouro());
        endereco.setNumero(dto.getNumero());

        imovel = imovelRepo.save(imovel);

        return new ImovelDTO(imovel);
    }


}



















