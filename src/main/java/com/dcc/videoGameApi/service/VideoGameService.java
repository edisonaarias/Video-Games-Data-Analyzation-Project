package com.dcc.videoGameApi.service;

import com.dcc.videoGameApi.models.VideoGame;
import com.dcc.videoGameApi.repository.VideoGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class VideoGameService {

    @Autowired
    private VideoGameRepository repository;



    public List<VideoGame> getVideoGame(){
        return repository.findAll();
    }
    public VideoGame getVideoGameById(Integer id){
        return repository.findById(id).orElse(null);
    }

    public long GetCountOfGames(){
        return repository.count();
    }


}
