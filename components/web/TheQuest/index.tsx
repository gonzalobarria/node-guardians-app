import { TheQuest as TheQuestI } from '@/helpers/interfaces';
import { darkTheme } from '@/styles/theme';
import Image from 'next/image';
import SubSection from '../SubSection';
import { ImageContainer, MiniWrapper, QuestWrapper, Title, Wrapper } from './styles';
import { cinzel } from '@/components/utils/constants';
import Link from 'next/link';

export default function TheQuest({ quest }: TheQuestI) {
	return (
		<QuestWrapper>
			<Link href='/quest/[id]' as={`/quest/${quest.id}`} style={{ textDecoration: 'none' }}>
				<ImageContainer>
					<Image
						src={quest.cover}
						alt={quest.title}
						fill
						style={{ objectFit: 'cover' }}
						sizes='(max-width: 768px) 100vw'
						priority
					/>
				</ImageContainer>
				<Title className={cinzel.className}>{quest.title}</Title>
			</Link>
			<Wrapper>
				<MiniWrapper>
					<SubSection title='Skill Tree' desc={quest.skillTree} color={darkTheme.colors.blue} />
					<SubSection title='Skill' desc={quest.skill} />
					<SubSection title='Type' desc={quest.type} />
				</MiniWrapper>
				<MiniWrapper>
					<SubSection title='Difficulty' difficulty={quest.difficulty} />
					<SubSection title='Experience' desc={quest.experience} />
					<SubSection title='Gold' desc={quest.gold} />
				</MiniWrapper>
			</Wrapper>
		</QuestWrapper>
	);
}
