package com.betrybe.alexandria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.betrybe.alexandria.models.entities") // Indica ao Spring Data JPA qual sub-pacote da aplicação que contém as entidades
@EnableJpaRepositories("com.betrybe.alexandria.models.repositories") // Indica ao Spring Data JPA qual sub-pacote da aplicação contém os repositórios
@ComponentScan("com.betrybe.alexandria") //  Indica ao Spring (não confundir com o Spring Data JPA) onde deve inicializar a busca por componentes (Controllers, Services, Beam, etc)
public class AlexandriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlexandriaApplication.class, args);
	}

}
